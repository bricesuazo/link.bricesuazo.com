import { links } from "../../constants";
import { notFound, redirect } from "next/navigation";

const Social = ({ params: { social } }: { params: { social: string } }) => {
  if (
    !social ||
    !links.find(
      (link) => link.name.toLocaleLowerCase() === social.toLocaleLowerCase()
    ) ||
    links.find(
      (link) => link.name.toLocaleLowerCase() === social.toLocaleLowerCase()
    ) === undefined
  ) {
    notFound();
  }

  // redirect(
  //   links.find(
  //     (link) => link.name.toLocaleLowerCase() === social.toLocaleLowerCase()
  //   )?.url!
  // );

  redirect("https://www.google.com/");
};

export default Social;
