import { Container, InputContainer } from "./styles";

function Input({ maxWidth, marginBot, icon: Icon, register, name, error, ...rest }) {
    return (
        <Container isErrored={!!error}>
            <InputContainer maxWidth={maxWidth} marginBot={marginBot} isErrored={!!error}>
                {Icon && <Icon />}
                <input {...register(name)} {...rest} />
            </InputContainer>
            <div>
                {!!error && <p>{error}</p>}
            </div>
        </Container>
    );
}

export default Input;