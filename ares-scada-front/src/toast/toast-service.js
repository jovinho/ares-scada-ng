import iziToast from "izitoast";

export const showEventToast = function(event) {
  iziToast.warning({
    title: "Evento",
    message: "Um evento aconteceu " + event.id,
    position: "topRight"
  });
};
