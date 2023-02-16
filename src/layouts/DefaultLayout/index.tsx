import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
