"use client"

import * as Sentry from "@sentry/nextjs"
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Error from "next/error"
import { useEffect } from "react"

export default function GlobalError({ error }) {
	useEffect(() => {
		Sentry.captureException(error)
	}, [error])

	return (
		<html lang="pt-BR">
			<body>
				<Error />
			</body>
		</html>
	)
}
