export default function About({ name }) {
    return (
        <div>
            <h1>My name is: {name}</h1>
        </div>
    );
}

export async function getStaticProps() {
    const data = await fetch("https://randomuser.me/api").then((res) =>
        res.json()
    );

    return {
        props: { name: data.results[0].name.first + " " + data.results[0].name.last },
    };
}