const images = import.meta.glob("@assets/images/**/*.(svg|jpg|png|jpeg)");

export default async function importImage(
    path: string,
    setImage: (src: string) => void
) {
    try {
        const module = await images[path]();
        setImage((module as { default: string }).default);
    } catch (error) {
        console.error("Error importing image from path ", path);
    }
}
