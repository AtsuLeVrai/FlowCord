import "./globals.css";
import "@xyflow/react/dist/style.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
	title: "FlowCord - Modern Visual Discord Bot Builder",
	description:
		"FlowCord is an open-source platform that revolutionizes Discord bot creation through a modern, intuitive visual interface. Built with Next.js and NestJS, it enables both beginners and experienced developers to create powerful Discord bots without extensive programming knowledge.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={"antialiased"}>{children}</body>
		</html>
	);
}
