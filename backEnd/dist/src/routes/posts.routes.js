"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");
var connection_1 = __importDefault(require("../database/connection"));
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var formatDate_1 = __importDefault(require("../utils/formatDate"));
var postsRouter = express_1.Router();
postsRouter.use(ensureAuthenticated_1.default);
// Rota para listar todos os "posts" da API
postsRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connection_1.default('posts').select('*').orderBy('updatedAt', 'asc')];
            case 1:
                users = _a.sent();
                return [2 /*return*/, response.json(users)];
        }
    });
}); });
// Rota para listar somente os "posts" do usuário que estiver autenticado no app
postsRouter.get('/myPosts', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.user.id;
                return [4 /*yield*/, connection_1.default('posts')
                        .select('*')
                        .where('authorId', id)
                        .orderBy('updatedAt', 'asc')];
            case 1:
                users = _a.sent();
                return [2 /*return*/, response.json(users)];
        }
    });
}); });
// Rota para criar um novo "post"
postsRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var text, id, user, name, date, post;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                text = request.body.text;
                id = request.user.id;
                if (text.length > 280) {
                    return [2 /*return*/, response.json({ message: 'Text maior que 280 caracteres.' })];
                }
                return [4 /*yield*/, connection_1.default('users').where('id', id).first()];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, response.json({ message: 'Usuário não existe.' })];
                }
                name = user.name;
                date = formatDate_1.default(new Date());
                post = {
                    id: uuidv4_1.uuid(),
                    text: text,
                    like: 0,
                    unlike: 0,
                    author: name,
                    authorId: id,
                    createdAt: date,
                    updatedAt: date,
                };
                return [4 /*yield*/, connection_1.default('posts').insert(post)];
            case 2:
                _a.sent();
                return [2 /*return*/, response.json({ post: post })];
        }
    });
}); });
// Rota para dar like, somente por outros usuários que não seja o autor
postsRouter.put('/like/:idPost', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var likeAdd, idPost, idUser, checkPostExists, _a, authorId, like, postUp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                likeAdd = request.body.likeAdd;
                idPost = request.params.idPost;
                idUser = request.user;
                return [4 /*yield*/, connection_1.default('posts').where('id', idPost).first()];
            case 1:
                checkPostExists = _b.sent();
                if (!checkPostExists) {
                    return [2 /*return*/, response.json({ message: 'Post não existe.' })];
                }
                _a = checkPostExists, authorId = _a.authorId, like = _a.like;
                if (authorId === idUser.id) {
                    return [2 /*return*/, response.json({ message: 'Você não pode curtir seu próprio post.' })];
                }
                return [4 /*yield*/, connection_1.default('posts')
                        .where('id', idPost)
                        .update('like', like + likeAdd)];
            case 2:
                _b.sent();
                return [4 /*yield*/, connection_1.default('posts').where('id', idPost).first()];
            case 3:
                postUp = _b.sent();
                return [2 /*return*/, response.json(postUp)];
        }
    });
}); });
// Rota para da deslike, somente por outros usuários que não seja o autor
postsRouter.put('/unlike/:idPost', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var unlikeAdd, idPost, idUser, checkPostExists, _a, authorId, unlike, postUp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                unlikeAdd = request.body.unlikeAdd;
                idPost = request.params.idPost;
                idUser = request.user;
                return [4 /*yield*/, connection_1.default('posts').where('id', idPost).first()];
            case 1:
                checkPostExists = _b.sent();
                if (!checkPostExists) {
                    return [2 /*return*/, response.json({ message: 'Post não existe.' })];
                }
                _a = checkPostExists, authorId = _a.authorId, unlike = _a.unlike;
                if (authorId === idUser.id) {
                    return [2 /*return*/, response.json({ message: 'Você não pode curtir seu próprio post.' })];
                }
                return [4 /*yield*/, connection_1.default('posts')
                        .where('id', idPost)
                        .update('unlike', unlike + unlikeAdd)
                        .select('*')];
            case 2:
                _b.sent();
                return [4 /*yield*/, connection_1.default('posts').where('id', idPost).first()];
            case 3:
                postUp = _b.sent();
                return [2 /*return*/, response.json(postUp)];
        }
    });
}); });
// Rota para alterar um post somente pelo autor autenticado no app
postsRouter.put('/:idPost', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var text, idPost, idUser, checkPostExists, authorId, date, postUp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                text = request.body.text;
                idPost = request.params.idPost;
                idUser = request.user;
                return [4 /*yield*/, connection_1.default('posts').where('id', idPost).first()];
            case 1:
                checkPostExists = _a.sent();
                if (!checkPostExists) {
                    return [2 /*return*/, response.json({ message: 'Post não existe.' })];
                }
                authorId = checkPostExists.authorId;
                if (authorId !== idUser.id) {
                    return [2 /*return*/, response.json({ message: 'Você não pode editar este post.' })];
                }
                date = formatDate_1.default(new Date());
                return [4 /*yield*/, connection_1.default('posts')
                        .where('id', idPost)
                        .update('updatedAt', date)
                        .update('text', text)];
            case 2:
                _a.sent();
                return [4 /*yield*/, connection_1.default('posts').where('id', idPost).first()];
            case 3:
                postUp = _a.sent();
                return [2 /*return*/, response.json(postUp)];
        }
    });
}); });
// Rota para deletar um "post", somente pelo autor autenticado no app
postsRouter.delete('/:idPost', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var idPost, idUser, checkPostExists, authorId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idPost = request.params.idPost;
                idUser = request.user;
                return [4 /*yield*/, connection_1.default('posts').where('id', idPost).first()];
            case 1:
                checkPostExists = _a.sent();
                if (!checkPostExists) {
                    return [2 /*return*/, response.json({ message: 'Post não existe.' })];
                }
                authorId = checkPostExists.authorId;
                if (authorId !== idUser.id) {
                    return [2 /*return*/, response.json({ message: 'Você não pode deletar este post.' })];
                }
                return [4 /*yield*/, connection_1.default('posts').where({ id: idPost }).delete()];
            case 2:
                _a.sent();
                return [2 /*return*/, response.json({ message: 'Post deletado com sucesso.' })];
        }
    });
}); });
exports.default = postsRouter;
