import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function initButton() {
    const btn = document.getElementById('download-btn');
    btn.addEventListener('click', () => {
        html2canvas(document.querySelector('.resume')).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
            pdf.save("resume.pdf");
        });
    });
}