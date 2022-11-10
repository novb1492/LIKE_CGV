export function ticketPagechangeRouter(router,moveId,locationId,date){
    router.push(`/ticketPage?move=${moveId}&locationId=${locationId}&date=${date}`);
}