import { getSession } from "next-auth/react";

export default function Home() {
    return (
        <>
            <h1>index</h1>
        </>
    );
}

export async function getServerSideProps(context: { req: any }) {
    const session = await getSession({ req: context.req });
    if (!session) {
        return {
            redirect: {
                destination: process.env.REDIRECT_NOT_AUTH,
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
}
