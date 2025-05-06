import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

const Behandelingen = async () => {
    const { data, status } = await fetchData("behandelingen");
    if (status === 404) {
        return notFound();
    }

    return (
        <div>
            <StoryblokStory story={data.story} />
        </div>
    );
};

export default Behandelingen;
