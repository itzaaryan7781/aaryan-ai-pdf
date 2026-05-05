// 🔥 Generate Notes (temporary AI)
function generateAI(){
let topic = document.getElementById("topic").value;

if(topic.trim() === ""){
alert("Please enter a topic");
return;
}

let text = "📘 Notes on " + topic + ":\n\n";

text += "1. Introduction of " + topic + "\n";
text += "2. Important points related to " + topic + "\n";
text += "3. Key concepts and explanation\n";
text += "4. Conclusion of " + topic + "\n";

document.getElementById("content").value = text;
}

// 📄 Generate PDF
function generatePDF(){
const { jsPDF } = window.jspdf;
const doc = new jsPDF();

let content = document.getElementById("content").value;

if(content.trim() === ""){
alert("No content to generate PDF");
return;
}

let lines = doc.splitTextToSize(content, 180);
doc.text(lines, 10, 10);

doc.save("Aaryan_AI_PDF.pdf");
}
