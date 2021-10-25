import useSWR from "swr";

const fetcher = async (input) => {
  const res = await fetch(input);
  return await res.json();
};

const PageViews = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher, { refreshInterval: 5000 });

  return <>{data?.total ? `${data.total} views` : `–––`}</>;
};

export default PageViews;
