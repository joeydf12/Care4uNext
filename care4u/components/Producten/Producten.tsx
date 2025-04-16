import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

const Producten = async () => {
    const { data, status } = await fetchData("producten");
    if (status === 404) {
        return notFound();
    }

    return (
        <div>
            <StoryblokStory story={data.story} />

        </div>
    );
};

export default Producten;
