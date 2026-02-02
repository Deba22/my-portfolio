import Head from 'next/head'

function Meta({ title, description, metadataTitle, metadataDescription, metadataImage,pageUrl }) {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta property="og:locale" content="en_IN"></meta>
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={pageUrl} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />

            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={metadataTitle} />
            <meta property="og:description" content={metadataDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={metadataImage} />
            
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:url" content={pageUrl}/>
            <meta name="twitter:title" content={metadataTitle}/>
            <meta name="twitter:description" content={metadataDescription}/>
            <meta name="twitter:image" content={metadataImage}/>
        </Head>
    )
}
Meta.defaultProps = {
    title: 'Debasish Gracias | Umbraco Developer',
    description: 'I can build your next Umbraco website. Got an amazing idea? I can create fully responsive websites and cross platform mobile apps.',
    metadataTitle: 'Debasish Gracias | Umbraco Developer | Web Portfolio',
    metadataDescription: 'I can help you build your next product. Got an amazing idea? I can create fully responsive websites and cross platform mobile apps.',
    metadataImage: 'https://github.com/Deba22/my-portfolio/tree/main/public/thumbnail.png',
}

export default Meta
