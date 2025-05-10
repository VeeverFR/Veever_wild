import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useRestaurantTimeSlotLogic } from "../../components/Hooks/Stay/useRestaurantTimeSlotLogic";
import "./RestaurantTimeSlot.css";
import type { RestaurantTimeSlotProps } from "../../types/TimeSlot/TimeSlotTypes";

export default function RestaurantTimeSlot({
  availableDates,
}: RestaurantTimeSlotProps) {
  const {
    selectedOptionsByDate,
    selectedDate,
    handleOptionSelect,
    handleDateSelect,
  } = useRestaurantTimeSlotLogic(availableDates ?? []);

  const formatDate = (date: string) =>
    format(new Date(date), "EEEE d MMMM", { locale: fr });

  return (
    <Box className="restaurant-scheduler">
      <Box className="scheduler-content">
        <Typography variant="h6" component="h3" className="question-text">
          Sélectionnez une date :
        </Typography>

        <Box
          sx={{
            display: "flex",
            flex: "wrap",
            gap: 0.5,
            justifyContent: "center",
          }}
        >
          {availableDates?.map((availableDate) => (
            <Box key={availableDate.date}>
              <Paper
                elevation={selectedDate.includes(availableDate.date) ? 6 : 1}
                className={`date-option ${selectedDate.includes(availableDate.date) ? "selected" : ""} ${!availableDate.isAvailable ? "disabled" : ""}`}
                onClick={() => {
                  if (availableDate.isAvailable) {
                    handleDateSelect(availableDate.date);
                  }
                }}
              >
                <Typography>{formatDate(availableDate.date)}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        {selectedDate
          .slice()
          .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
          .map((date) => (
            <Box key={date}>
              <Typography variant="h6" component="h3" className="question-text">
                Choisissez votre service pour le {formatDate(date)} :
              </Typography>
              <Grid container spacing={2} className="meal-options-container">
                <Paper
                  elevation={
                    selectedOptionsByDate[date]?.includes("dejeuner") ? 6 : 1
                  }
                  className={`meal-option ${selectedOptionsByDate[date]?.includes("dejeuner") ? "selected" : ""}`}
                  onClick={() => handleOptionSelect(date, "dejeuner")}
                >
                  <FreeBreakfastIcon className="meal-icon" />
                  <Typography>Petit déjeuner</Typography>
                </Paper>
                <Paper
                  elevation={
                    selectedOptionsByDate[date]?.includes("diner") ? 6 : 1
                  }
                  className={`meal-option ${selectedOptionsByDate[date]?.includes("diner") ? "selected" : ""}`}
                  onClick={() => handleOptionSelect(date, "diner")}
                >
                  <DinnerDiningIcon className="meal-icon" />
                  <Typography>Déjeuner</Typography>
                </Paper>
                <Paper
                  elevation={
                    selectedOptionsByDate[date]?.includes("dejeuner-diner")
                      ? 6
                      : 1
                  }
                  className={`meal-option ${selectedOptionsByDate[date]?.includes("dejeuner-diner") ? "selected" : ""}`}
                  onClick={() => handleOptionSelect(date, "dejeuner-diner")}
                >
                  <Box className="double-icon">
                    <RestaurantIcon className="meal-icon" />
                  </Box>
                  <Typography>Dîner</Typography>
                </Paper>
              </Grid>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
