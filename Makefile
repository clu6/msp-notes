.PHONY: install dev build preview clean help

# Default target
.DEFAULT_GOAL := all

# Colors for help message
BLUE := \033[36m
NC := \033[0m

all: clean install build ## Clean, install dependencies, and build the site
	@echo "$(BLUE)Build completed successfully!$(NC)"

serve: build ## Build and serve the site
	@echo "$(BLUE)Starting server at http://localhost:4173$(NC)"
	npm run docs:preview

install: ## Install dependencies
	npm install -D vitepress vue

dev: ## Start development server
	npm run docs:dev

build: ## Build static site
	npm run docs:build

preview: ## Preview built site locally
	npm run docs:preview

clean: ## Clean build artifacts
	rm -rf docs/.vitepress/dist
	rm -rf docs/.vitepress/cache
	rm -rf node_modules

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*##"; printf ""} /^[a-zA-Z_-]+:.*?##/ { printf "  $(BLUE)%-15s$(NC) %s\n", $$1, $$2 }' $(MAKEFILE_LIST) 