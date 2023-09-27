const SurveyListItem = ({ survey }) => {
    return (
        <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
            <img
                // TODO: RENDER IMAGE
                src="{survey.img_url}"
                alt={survey.title}
                className="w-full h-48 object-cover"
            />
            <h4 className="mt-4 text-lg font-bold">{survey.title}</h4>
            <div
                dangerouslySetInnerHTML={{ __html: survey.description }}
                className="overflow-hidden flex-1"
            ></div>
            <div className="flex justify-between items-center mt-3">
                // TODO: DYNAMIC BUTTON
            </div>
        </div>
    );
};

export default SurveyListItem;
