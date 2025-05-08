import LoginButton from '../../LoginForm/LoginButton/LoginButton'

type RegisterButtonProps = {
	onClick: () => void
	children: string
}

const RegisterButton = ({ onClick, children }: RegisterButtonProps) => {
	return <LoginButton onClick={onClick}>{children}</LoginButton>
}

export default RegisterButton
