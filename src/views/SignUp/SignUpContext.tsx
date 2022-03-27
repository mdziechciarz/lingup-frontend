import React, {createContext, ReactNode, useReducer} from 'react';

type Action = {type: any; payload: any};
interface State {
  step: number;
  userInput: {
    nativeLanguage: string | null;
    otherLanguages: {language: string; level: number}[];
    bio: string;
    name: string | null;
    picture: string | null;
    // username: string | null;
    // email: string | null;
    // password: string | null;
  };
}

const initialState: State = {
  step: 0,
  userInput: {
    nativeLanguage: null,
    otherLanguages: [],
    bio: '',
    name: null,
    picture: null,
    // username: null,
    // email: null,
    // password: null,
  },
};

const SignUpContext = createContext<any>(undefined);

const SignUpReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'PREVIOUS_STEP':
      return {...state, step: state.step - 1};
    case 'SET_NATIVE_LANGUAGE':
      return {
        ...state,
        step: state.step + 1,
        userInput: {...state.userInput, nativeLanguage: action.payload},
      };
    case 'SET_OTHER_LANGUAGES':
      return {
        ...state,
        step: state.step + 1,
        userInput: {...state.userInput, otherLanguages: action.payload},
      };
    case 'SET_BIO':
      return {
        ...state,
        step: state.step + 1,
        userInput: {...state.userInput, bio: action.payload},
      };
    case 'SKIP_BIO':
      return {
        ...state,
        step: state.step + 1,
        userInput: {...state.userInput, bio: ''},
      };
    case 'SKIP_OAUTH':
      // TODO
      return {
        ...state,
        step: state.step + 1,
      };
    case 'SET_NAME':
      return {
        ...state,
        step: state.step + 1,
        userInput: {...state.userInput, name: action.payload},
      };
    case 'SET_PICTURE':
      return {
        ...state,
        step: state.step + 1,
        userInput: {...state.userInput, picture: action.payload},
      };
    case 'SKIP_PICTURE':
      return {
        ...state,
        step: state.step + 1,
        userInput: {...state.userInput, picture: null},
      };
    // case 'SET_CREDENTIALS':
    //   return {
    //     ...state,
    //     userInput: {
    //       ...state.userInput,
    //       username: action.payload.username,
    //       email: action.payload.email,
    //       password: action.payload.password,
    //     },
    // };
    default:
      return state;
  }
};

const SignUpProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(SignUpReducer, initialState);
  const value = {state, dispatch};

  return <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>;
};

export {SignUpProvider, SignUpContext};
