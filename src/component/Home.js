import React from 'react';

const headerComponentStyle = {
  color: '#ff0098',
  lineHeight: 1,
  padding: '7rem 1rem',
  fontSize: '3rem',
  fontWeight: 700,
};

const componentStyle = {
  color: '#ff0870',
  lineHeight: 1,
  padding: '0.7rem 6rem',
  fontSize: '1.5rem',
  fontWeight: 600,
};

const Home = () => (
  <>
    <div>
      <h3 style={headerComponentStyle}>
        Welcome to our page
      </h3>
      <p style={componentStyle}>
        The purpose of lorem ipsum i to create a natural looking block of text
        sentence, paragraph, page, etc. that doesnot distract from the layout. A practice no
        t without controversy, laying out pages with meaningless filler text can be
        e very useful when the focus is meant to be on design, not content.
      </p>
      <p style={componentStyle}>
        The passage experienced a surge in popularity during the 1960s when Letraset used it
        on their dry-transfer sheets, and again during the 90s as desktop publishers bundled
        the text with their software. Today it is seen all around the web; on templates, websites,
        and stock designs. Use our generator to get your own, or read on for the authoritative
        history of lorem ipsum.
      </p>
    </div>
  </>
);
export default Home;
