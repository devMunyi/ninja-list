// meant to tell next how many pages to be statically made based on dynamic data
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((ninja) => ({params: {id: ninja.id.toString()}}))

  return {
    paths,
    fallback: false,
  };
};

// this function will be executed a number of times equivalent to the ninjas list 
// to pre-build static pages for each ninja
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const NinjaDetails = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default NinjaDetails;
