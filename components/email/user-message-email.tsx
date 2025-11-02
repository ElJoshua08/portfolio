import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Section,
  Text,
} from "@react-email/components";
import { Html } from "@react-email/html";

type UserMessageEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const UserMessageEmail = ({
  name,
  email,
  subject,
  message,
}: UserMessageEmailProps) => (
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
          New Message Received
        </Heading>

        <Section style={{ marginBottom: "16px" }}>
          <Text
            style={{ fontSize: "16px", color: "#222327", lineHeight: "1.6" }}
          >
            <strong>From:</strong> {name} ({email})
          </Text>
          <Text
            style={{ fontSize: "16px", color: "#222327", lineHeight: "1.6" }}
          >
            <strong>Subject:</strong> {subject}
          </Text>
        </Section>

        <Section style={{ marginBottom: "24px" }}>
          <Text
            style={{ fontSize: "16px", color: "#222327", lineHeight: "1.6" }}
          >
            <strong>Message:</strong>
          </Text>
          <Text
            style={{
              fontSize: "16px",
              color: "#222327",
              lineHeight: "1.6",
              whiteSpace: "pre-line",
            }}
          >
            {message}
          </Text>
        </Section>

        <Hr style={{ borderColor: "#e5e7eb" }} />

        <Text
          style={{
            fontSize: "14px",
            color: "#9ca3af",
            textAlign: "center",
            marginTop: "12px",
          }}
        >
          This message was sent via your portfolio contact form.
        </Text>
      </Container>
    </Body>
  </Html>
);
