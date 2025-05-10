import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useStayLogic } from "../../components/Hooks/Stay/useStayLogic";
import "./StayTopPage.css";
import type { StayTopPageProps } from "../../types/Stay/StayProps";

export default function StayTopPage({
  selectedDates,
  onChange,
  errorMessage,
}: StayTopPageProps) {
  const {
    groupChoice,
    setGroupChoice,
    selectedNumber,
    setSelectedNumber,
    groupOptions,
    numberOptions,
  } = useStayLogic();

  return (
    <main className="stay-container">
      <section className="calendar">
        <h2 className="title-calendar">Calendrier</h2>
        <>
          <DatePicker
            selected={
              selectedDates.length > 0
                ? selectedDates[selectedDates.length - 1]
                : null
            }
            onChange={onChange}
            inline
            isClearable
            minDate={new Date()}
            highlightDates={selectedDates}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
      </section>

      <section className="group-choice">
        <label className="stay-label" htmlFor="group-choice">
          Type de groupe
        </label>
        <select
          className="stay-select"
          id="group-choice"
          value={groupChoice}
          onChange={(event) => setGroupChoice(event.target.value)}
        >
          <option value="" disabled>
            Sélectionnez une option
          </option>
          {groupOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </section>

      <section className="group-number">
        <label className="stay-label" htmlFor="group-number">
          Nombre de personnes
        </label>
        <select
          className="stay-select"
          id="group-number"
          value={selectedNumber}
          onChange={(event) => setSelectedNumber(event.target.value)}
        >
          <option value="" disabled>
            Sélectionnez un nombre de personnes
          </option>
          {numberOptions.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </section>
    </main>
  );
}
