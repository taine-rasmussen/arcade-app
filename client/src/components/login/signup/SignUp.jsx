import SignUpPreview from './SignUpPreview';
import SignUpForm from './SignUpForm';

const SignUp = (props) => {

  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;

  return (

    <>
      {isOnSignUpForm ?
        (
          <SignUpForm
            setIsOnSignUpForm={setIsOnSignUpForm}
            isOnSignUpForm={isOnSignUpForm}
          />
        ) : (
          <SignUpPreview
            setIsOnSignUpForm={setIsOnSignUpForm}
            isOnSignUpForm={isOnSignUpForm}
          />
        )
      }
    </>
  )
}

export default SignUp
