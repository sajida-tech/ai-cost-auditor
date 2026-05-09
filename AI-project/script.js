function analyze(){

  let cursor = Number(document.getElementById("cursor").value || 0);
  let copilot = Number(document.getElementById("copilot").value || 0);
  let chatgpt = Number(document.getElementById("chatgpt").value || 0);
  let claude = Number(document.getElementById("claude").value || 0);
  let gemini = Number(document.getElementById("gemini").value || 0);
  let team = Number(document.getElementById("team").value || 1);

  let total = (cursor + copilot + chatgpt + claude + gemini) * team;

  let summary = "";

  if(total > 150){
    summary = "You are overspending heavily. Optimize subscriptions immediately.";
  }
  else if(total > 80){
    summary = "Moderate spending. Some optimization possible.";
  }
  else{
    summary = "Great! Your AI spend is efficient.";
  }

  document.getElementById("result").innerHTML =
    "💸 Total Spend: $" + total +
    "<br>👥 Team Size: " + team +
    "<br><br>🤖 AI Summary: " + summary;

  // 📊 GRAPH
  setTimeout(() => {

    let ctx = document.getElementById("chart");

    if(!ctx) return;

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Cursor", "Copilot", "ChatGPT", "Claude", "Gemini"],
        datasets: [{
          label: "Monthly Spend",
          data: [cursor, copilot, chatgpt, claude, gemini],
          backgroundColor: "#4f46e5"
        }]
      }
    });

  }, 200);
}

function resetForm(){
  document.getElementById("cursor").value = "";
  document.getElementById("copilot").value = "";
  document.getElementById("chatgpt").value = "";
  document.getElementById("claude").value = "";
  document.getElementById("gemini").value = "";
  document.getElementById("team").value = "";
  document.getElementById("result").innerHTML = "";
}

function shareReport(){

  let text = document.getElementById("result").innerText;

  let url = window.location.href + "?report=" + encodeURIComponent(text);

  navigator.clipboard.writeText(url);

  alert("Share link copied!");
}