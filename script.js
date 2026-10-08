const tabs = document.querySelectorAll(".tab");
const tools = document.querySelectorAll(".tool-form");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    tools.forEach(tool => tool.classList.add("hidden"));
    document.getElementById(`${tab.dataset.tool}-tool`).classList.remove("hidden");
  });
});

function showResult(id, text) {
  const result = document.getElementById(id);
  result.textContent = text;
  result.style.display = "block";
}

function getInput(id) {
  return document.getElementById(id).value.trim();
}

function generateEmail() {
  const input = getInput("email-input");
  if (!input) return showResult("email-result", "Please describe what you want the email to say.");

  showResult("email-result",
`Subject: Request / Follow-up

Dear [Name],

I hope you are well.

I am writing regarding the following matter:

${input}

Please let me know if you need any additional information from me. I would appreciate your assistance and look forward to your response.

Kind regards,
[Your Name]`);
}

function summarizeMeeting() {
  const input = getInput("meeting-input");
  if (!input) return showResult("meeting-result", "Please paste your meeting notes first.");

  showResult("meeting-result",
`MEETING SUMMARY

Main discussion:
${input}

KEY DECISIONS
• Review the points discussed and confirm the agreed direction.

ACTION ITEMS
• Identify the owner for each task.
• Confirm deadlines and follow-up dates.
• Share the final decisions with relevant team members.

FOLLOW-UP
Schedule a short follow-up if any action item remains unclear.`);
}

function planTasks() {
  const input = getInput("tasks-input");
  if (!input) return showResult("tasks-result", "Please enter a goal first.");

  showResult("tasks-result",
`TASK PLAN

Goal:
${input}

1. Define the exact outcome you need.
2. Break the goal into smaller tasks.
3. Complete the highest-priority task first.
4. Set a realistic deadline for each task.
5. Review your progress and adjust the plan.
6. Complete a final quality check before submission.

PRIORITY: High
SUGGESTED APPROACH: Work from the deadline backwards and leave time for review.`);
}

function assistResearch() {
  const input = getInput("research-input");
  if (!input) return showResult("research-result", "Please enter a research topic first.");

  showResult("research-result",
`RESEARCH PLAN

Topic:
${input}

RESEARCH QUESTIONS
• What is the main problem or opportunity?
• What are the most important benefits?
• What are the limitations or risks?
• What evidence supports the main claims?
• What practical recommendations can be made?

SUGGESTED SOURCES
• Academic publications
• Government or institutional reports
• Reputable industry sources
• Original documentation and primary sources

TIP: Compare multiple reliable sources and verify important claims before using them.`);
}

function chatAssistant() {
  const input = getInput("chat-input");
  if (!input) return showResult("chat-result", "Please ask a question first.");

  const lower = input.toLowerCase();
  let answer = `I can help you break this workplace question into clear steps.

Your question:
${input}

Suggested approach:
1. Define the desired outcome.
2. Identify the most urgent action.
3. Break the work into smaller tasks.
4. Set a deadline.
5. Review the final result before sharing it.`;

  if (lower.includes("priorit")) {
    answer = `A simple way to prioritize your tasks is:

1. List everything you need to do.
2. Mark tasks as urgent/important.
3. Complete high-impact urgent tasks first.
4. Schedule important tasks that are not urgent.
5. Delegate or reduce low-value tasks where appropriate.
6. Review your list at the end of the day.`;
  }

  if (lower.includes("email")) {
    answer = `For a professional workplace email:

• Start with a clear subject.
• State your purpose early.
• Give only the necessary context.
• Make your request or next step clear.
• End politely.
• Proofread before sending.`;
  }

  showResult("chat-result", answer);
}
