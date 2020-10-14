import Head from 'next/head'

export default function Home() {
  const today = new Date();
  return (
    <div className="container">
      <Head>
        <title>Cite Your Sources, Please!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Cite Your Sources, Please!" key="title" />
        <meta name="description" content="Sometimes we get a little too excited or concerned and share things before verifying legitimacy. Come check out if you're too legit to quit." key="desc" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://citeyoursourcesfor.me/" />
        <meta property="og:title" content="Cite Your Sources, Please!" />
        <meta property="og:description" content="Sometimes we get a little too excited or concerned and share things before verifying legitimacy. Come check out if you're too legit to quit." />
        <meta property="og:image" content="/meta_img.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://citeyoursourcesfor.me/" />
        <meta property="twitter:title" content="Cite Your Sources, Please!" />
        <meta property="twitter:description" content="Sometimes we get a little too excited or concerned and share things before verifying legitimacy. Come check out if you're too legit to quit." />
        <meta property="twitter:image" content="/meta_img.jpg" />

        
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110420554-2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'UA-110420554-2');
              `,
          }}
        />
      </Head>

      <main>
        <h1 className="title">
          Cite Your Sources, Please!
        </h1>

        <p className="description">
          Sometimes we get a little too excited or concerned and share things before verifying legitimacy.
        </p>

        <h3>Check out these helpful resources to help stop the spread of false information:</h3>

        <div className="grid">
          <a href="https://www.snopes.com/" className="card" target="_blank">
            <h3>Snopes</h3>
            <p>Snopes is the internet’s go-to source for discerning what is true and what is total nonsense.</p>
          </a>

          <a href="https://www.factcheck.org/search/" className="card" target="_blank">
            <h3>FactCheck.org</h3>
            <p>A Project of The Annenberg Public Policy Center</p>
          </a>

          <a href="https://toolbox.google.com/factcheck/explorer" className="card" target="_blank">
            <h3>Google's Fact Check Tools</h3>
            <p>Search fact check results from the web about a topic or person.</p>
          </a>

          <a href="https://www.washingtonpost.com/news/fact-checker/" className="card" target="_blank">
            <h3>The Washington Post Fact Checker</h3>
            <p>Checking the truth behind the political rhetoric.</p>
          </a>

          <a href="https://www.politifact.com/truth-o-meter/" className="card" target="_blank">
            <h3>PolitiFact Truth-O-Meter</h3>
            <p>PolitiFact is a fact-checking website that rates the accuracy of claims by elected officials and others on its Truth-O-Meter.</p>
          </a>

          <a href="https://www.politifact.com/punditfact/" className="card" target="_blank">
            <h3>PolitiFact PunditFact</h3>
            <p>PunditFact is a project of the Poynter Institute, dedicated to checking the accuracy of claims by pundits, columnists, bloggers, political analysts, the hosts and guests of talk shows, and other members of the media.</p>
          </a>
        </div>
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
          font-weight: bold;
        }

        a {
          color: inherit;
          transition: color 0.15s ease;
        }

        a:hover {
          color: #E05263;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description, h3 {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: stretch;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1200px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.15s ease, box-shadow 0.15s ease;
          background-color: #FFF;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #E05263;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
