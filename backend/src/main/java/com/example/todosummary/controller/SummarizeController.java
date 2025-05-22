package com.example.todosummary.controller;

import com.example.todosummary.model.Todo;
import com.example.todosummary.repository.TodoRepository;
import com.example.todosummary.service.OpenAiService;
import com.example.todosummary.service.SlackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/summarize")
public class SummarizeController {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private OpenAiService openAiService;

    @Autowired
    private SlackService slackService;

    @PostMapping
    public String summarizeAndSendToSlack() {
        List<Todo> todos = todoRepository.findAll();
        List<String> pendingItems = todos.stream()
                .filter(todo -> !todo.isCompleted())
                .map(Todo::getTitle)
                .toList();

        String summary = openAiService.getSummary(pendingItems);
        boolean success = slackService.sendMessage(summary);

        return success ? "Summary sent to Slack." : "Failed to send to Slack.";
    }
}
