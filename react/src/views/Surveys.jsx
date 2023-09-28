import PageComponents from "../components/PageComponents";
import SurveyListItem from "../components/SurveyListItem";
import { useStateContext } from "../contexts/ContextProvider";

const Surveys = () => {
    const { surveys } = useStateContext();
    const onDeleteClick = () => {
        console.log("On delete click");
    };
    return (
        <PageComponents title="Surveys">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map((survey) => (
                    <SurveyListItem
                        survey={survey}
                        key={survey.id}
                        onDeleteClick={onDeleteClick}
                    />
                ))}
            </div>
        </PageComponents>
    );
};

export default Surveys;
