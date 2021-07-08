import profile from "../../utils/profile";

function Bio() {
  const { bio } = profile;
  return (
    <section className="app__section">
      {/* <h3>Bio</h3> */}

      { bio.map((paragraph: string, index: number) => (
        <p key={ index }>
          { paragraph }
        </p>
      )) }
    </section>
  );
}

export default Bio;
