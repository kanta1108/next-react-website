import Logo from "components/logo";
import Container from "components/container";
import styles from "styles/footer.module.css";
import Social from "./social";

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo />
                    <Social iconSize="30px" />
                </div>
            </Container>
        </footer>
    )
}