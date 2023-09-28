import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PageComponents from "../components/PageComponents";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";

const Surveys = () => {
    const { surveys } = useStateContext();
    const onDeleteClick = () => {
        console.log("On delete click");
    };
    return (
        <PageComponents
            title="Surveys"
            buttons={
                <TButton color="green" to="/surveys/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create new
                </TButton>
            }
        >
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
