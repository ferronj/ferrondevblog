---
title: "I Built an F1 Race Prediction Model (and a Dashboard to Go With It)"
description: "Markov chains, Bayesian state-space models, and way too many Monte Carlo simulations — all to answer: who's winning the next Grand Prix?"
date: 2026-03-08
---

## The Idea

I wanted to see if I could predict F1 race results using math instead of gut feelings. Turns out you can — sort of. The models are surprisingly good at ranking drivers, but hilariously overconfident sometimes (one model gave Verstappen a 92% chance at the 2025 championship).

## What I Built

**9 progressively complex prediction models**, starting from a dead-simple global transition matrix and ending with a full Bayesian state-space model that jointly optimizes driver and constructor strengths over time.

Here's the quick rundown:

- **Stage 1-2**: Baseline Markov chain stuff. "Who finished where last race?"
- **Stage 3**: Add constructor effects — because the car matters (a lot)
- **Stage 6**: Year-weighted constructor priors with cross-validation. This ended up being the best-calibrated model overall
- **Stage 8**: Plackett-Luce ranking model — best at ordering drivers, worst at saying *how likely* each outcome is
- **Stage 9**: Bayesian state-space — best at predicting top-3 finishers (1.59 out of 3 correct on average)

Each model taught me something new about why the previous one broke.

## The Fun Parts

**The recency problem**: Recent results should matter more than 5-year-old ones, right? But if you try to learn the decay rate from training data, the optimizer says "no decay needed" every time. The fix: hold out the most recent year and optimize against *that*. Recency weighting helps predictions, not in-sample fit.

**The overconfidence problem**: Stage 9 once predicted McLaren had a *100% chance* to win the constructors' championship. In 10,000 simulated seasons. Not a single loss. That's what happens when your model really likes recent dominance.

**Max Verstappen's dad**: I spent an embarrassing amount of time debugging why "Verstappen" kept showing up with mediocre stats. Driver ID 50 is Jos Verstappen. Max is 830.

## The Dashboard

I wrapped everything in a [Streamlit](https://streamlit.io/) dashboard that lets you toggle between models and compare their predictions side-by-side:

- Podium predictions with win probabilities
- Full grid table with DNF odds
- Position distribution charts per driver
- Constructor analysis and teammate battles
- A model agreement view showing where the models disagree the most

## The Stack

- Python + NumPy/SciPy for the models
- Streamlit + Plotly for the dashboard
- Historical F1 data from the Ergast API (1950-2024) + scraped 2025 results

Check it out on [GitHub](https://github.com/ferronj/hook-f1).

## What's Next

I'm planning to run predictions before each 2026 race and track how the models do over the season. Stay tuned.