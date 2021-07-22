import { Container, Bar, Content, Right } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Link } from "react-router-dom";

import { AiFillCaretRight } from "react-icons/ai";

export function Home() {
    return (
        <Container>
            <Bar>
                <div>
                    <h1>KenzieHub</h1>
                    <Link to="/login">Entrar</Link>
                </div>
            </Bar>
            <Content>
                <Input maxWidth={450} placeholder="Tecnologia" />
                <Button>Filtrar</Button>
            </Content>
            <Content>
                <figure>
                    <img src="https://picsum.photos/100/100" alt="profile" />
                    <figcaption>Rodrigo Diniz</figcaption>
                </figure>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <p>react, html, css, java script</p>
                </div>
                <Right> <Link to="/"><AiFillCaretRight /></Link> </Right>
            </Content>
            <Content>
                <figure>
                    <img src="https://picsum.photos/100/100" alt="profile" />
                    <figcaption>Rodrigo Diniz</figcaption>
                </figure>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <p>react, html, css, java script</p>
                </div>
                <Right> <Link to="/"><AiFillCaretRight /></Link> </Right>
            </Content>
            <Content>
                <figure>
                    <img src="https://picsum.photos/100/100" alt="profile" />
                    <figcaption>Rodrigo Diniz</figcaption>
                </figure>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <p>react, html, css, java script</p>
                </div>
                <Right> <Link to="/"><AiFillCaretRight /></Link> </Right>
            </Content>
            <Content>
                <figure>
                    <img src="https://picsum.photos/100/100" alt="profile" />
                    <figcaption>Rodrigo Diniz</figcaption>
                </figure>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <p>react, html, css, java script</p>
                </div>
                <Right> <Link to="/"><AiFillCaretRight /></Link> </Right>
            </Content>
        </Container>
    );
}