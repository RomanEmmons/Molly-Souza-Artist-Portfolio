import React from 'react';
import art from '../../images/art.js';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ art: art });
  }

  render() {
    return (
      <div>
        <main>
          <section className="cards">
            {this.state.art
              ? this.state.art.map((piece, i) => {
                  return (
                    <article key={i}>
                      <img
                        className="article-img"
                        src={piece.image.default}
                        alt="opps!!"
                      />
                      <h1 className="article-title">{piece.title}</h1>
                    </article>
                  );
                })
              : null}
          </section>
        </main>
      </div>
    );
  }
}

export default Layout;
{
  /* //  <section className="cards">
      //     <article>
      //       <img
      //         className="article-img"
      //         src="http://placekitten.com/305/205"
      //         alt=" "
      //       />
      //       <p className="article-title">
      //         Sometime ago, Molly was born in a place. Sometime after, Molly
      //         will die in a place. In the mean time, she will create weird art.
      //       </p>
      //     </article>
      //     <article>
      //       <img
      //         className="article-img"
      //         src="http://placekitten.com/320/220"
      //         alt=" "
      //       />
      //       <h1 className="article-title">Title of article</h1>
      //     </article>
      //     <article>
      //       <img
      //         className="article-img"
      //         src="http://placekitten.com/330/240"
      //         alt=" "
      //       />
      //       <h1 className="article-title">Title of article</h1>
      //     </article>
      //     <article>
      //       <img
      //         className="article-img"
      //         src="http://placekitten.com/280/250"
      //         alt=" "
      //       />
      //       <h1 className="article-title">Title of article</h1>
      //     </article>
      //     <article>
      //       <img
      //         className="article-img"
      //         src="http://placekitten.com/310/210"
      //         alt=" "
      //       />
      //       <h1 className="article-title">Title of article</h1>
      //     </article>
      //     <article>
      //       <img
      //         className="article-img"
      //         src="http://placekitten.com/430/240"
      //         alt=" "
      //       />
      //       <h1 className="article-title">Title of article</h1>
      //     </article>
      //   </section> */
}
