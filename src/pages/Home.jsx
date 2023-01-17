import Button from "../components/Button";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        background: "#1d2b3a",
        color: "#fff",
      }}
    >
      Home
      <Button text={"test"} size={"medium"} />
    </div>
  );
};

export default Home;
