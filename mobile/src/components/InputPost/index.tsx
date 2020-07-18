import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  isModal?: boolean;
}

interface InputValueRef {
  value: string;
}

interface InputRef {
  focus(): void;
}

const InputPost: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, icon, isModal = false, ...rest },
  ref,
) => {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);
  const [isModalInput, setModalInput] = useState(false);

  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueRef>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputElementRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue(ref: any, value) {
        inputElementRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  const handleInputFocus = useCallback(() => {
    setFocused(true);
    if (isModal) {
      setModalInput(true);
    }
  }, [isModal]);

  const handleInputBlur = useCallback(() => {
    setFocused(false);

    setFilled(!!inputValueRef.current.value);
  }, []);

  return (
    <Container isFocused={isFocused} isErrored={!!error} isModal={isModalInput}>
      <Icon
        name={icon}
        size={28}
        color={
          // eslint-disable-next-line no-nested-ternary
          isModalInput
            ? '#3f3d56'
            : isFocused || isFilled
              ? '#6C63FF'
              : '#83819A'
        }
      />

      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#83819A"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />

      {error && <Icon name="alert-circle" size={20} color="#C53030" />}
    </Container>
  );
};

export default forwardRef(InputPost);
