import Link from "next/link"
import { QRButton } from "./QRButton"

export const Menubar = () => {
	return (
		<div className="navbar bg-base-300 sticky top-0 z-50 mb-6 shadow-md md:rounded-b-lg">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							aria-label="Menu"
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<title>Menu</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						// biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li>
							<Link href={"/"}>Devocionais</Link>
						</li>
						<li>
							<Link href={"/musicas"}>Musicas</Link>
						</li>
					</ul>
				</div>
				<Link
					href={"/"}
					className="btn btn-ghost text-xl"
				>
					AGJ Devocionais
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={"/"}>Devocionais</Link>
					</li>
					<li>
						<Link href={"/musicas"}>Musicas</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<QRButton />
			</div>
		</div>
	)
}
