import Head from 'next/head'

export default function Custom404() {
    const today = new Date();
    return( 
        <div className="container">
        <Head>
          <title>404 - Cite Your Sources, Please!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <h1 className="title">
            404 - Page Not Found
          </h1>
          <a href="/"><h2>Now go cite your sources!</h2></a>
        </main>
  
        <footer>
          <p>&copy; { today.getFullYear() } by <a href="https://twitter.com/iNeedAdult" target="_blank">iNeedAdult</a></p>
        </footer>
  
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          footer {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
          }
  
          a {
            color: inherit;
            transition: color 0.15s ease;
          }
  
          a:hover {
            color: #846178;
          }
  
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            text-align: center;
          }
        `}</style>
  
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            background-color: #5DFDCB;
            color: #120D31;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
  }