import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Section,
  Text,
} from "@react-email/components";
import { Html } from "@react-email/html";

type ThanksEmailProps = {
  name: string;
};

export const ThanksEmail = ({ name }: ThanksEmailProps) => (
  <Html>
    <Head />
    <Body
      style={{
        fontFamily: "'Inter', sans-serif",
        margin: 0,
        padding: "32px 0",
      }}
    >
      <Container
        style={{
          backgroundColor: "#c6c6c6",
          borderRadius: "8px",
          padding: "32px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <Heading
          style={{
            color: "#895af9",
            fontSize: "22px",
            marginBottom: "16px",
          }}
        >
          Thank you for reaching out
        </Heading>

        <Text
          style={{
            fontSize: "16px",
            color: "#222327",
            lineHeight: "1.6",
          }}
        >
          Dear {name},
        </Text>

        <Text
          style={{
            fontSize: "16px",
            color: "#222327",
            lineHeight: "1.6",
            marginTop: "16px",
          }}
        >
          I have received your message and will respond as soon as possible.
          Thank you for taking the time to contact me.
        </Text>

        <Section style={{ marginTop: "24px", textAlign: "center" }}>
          <Button
            style={{
              backgroundColor: "#01ba7c",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              padding: "12px 24px",
            }}
            href="https://devbyjoshua.vercel.app/"
          >
            Visit Portfolio
          </Button>
        </Section>

        <Section style={{ marginTop: "32px" }}>
          <Hr style={{ borderColor: "#e5e7eb" }} />
          <Text
            style={{
              fontSize: "14px",
              color: "#9ca3af",
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            Dev By Joshua - {new Date().getFullYear()}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
