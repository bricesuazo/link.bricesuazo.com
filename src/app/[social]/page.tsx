import { notFound } from "next/navigation";
import { links } from "../../constants";

const Social = ({ params: { social } }: { params: { social: string } }) => {
  if (
    !social ||
    !links.find((link) => link.slug === social.toLocaleLowerCase()) ||
    links.find((link) => link.slug === social.toLocaleLowerCase()) === undefined
  )
    notFound();
  return <div></div>;
};

export default Social;
