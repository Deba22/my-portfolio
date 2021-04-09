import Head from 'next/head'

function Meta({ title, keywords, description }) {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta property="og:locale" content="en_IN"></meta>
            <title>{title}</title>
            <meta name='description' content={description} /> 
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <meta property="”og:url”" content="https://debasishgracias.com" />
            <meta property="og:title" content="Debasish Gracias | Full Stack Developer | Web Portfolio" />
            <meta property="og:description" content="I can help you build your next product. Got an amazing idea? I can create fully responsive websites and cross platform mobile apps." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://github.com/Deba22/my-portfolio/tree/main/public/thumbnail.png" />
        </Head>
    )
}
Meta.defaultProps = {
    title: 'Debasish Gracias | Full Stack Developer',
    description: 'I can help you build your next product. Got an amazing idea? I can create fully responsive websites and cross platform mobile apps.',
}

export default Meta
