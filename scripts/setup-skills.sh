#!/bin/bash
# Auto-setup skills for any project
# Usage: ./setup-skills.sh [project-dir]

PROJECT_DIR="${1:-.}"

# Source skills directory
AGENTS_SKILLS="$HOME/.agents/skills"

# Check if source exists
if [ ! -d "$AGENTS_SKILLS" ]; then
    echo "Error: $AGENTS_SKILLS not found"
    exit 1
fi

echo "Setting up skills in $PROJECT_DIR..."

# Create skill directories
mkdir -p "$PROJECT_DIR/.claude/skills"
mkdir -p "$PROJECT_DIR/.opencode/skills"

# Link all skills from ~/.agents/skills/
for skill in "$AGENTS_SKILLS"/*/; do
    skill_name=$(basename "$skill")
    
    # Link to .claude/skills
    if [ ! -L "$PROJECT_DIR/.claude/skills/$skill_name" ]; then
        ln -sf "$skill" "$PROJECT_DIR/.claude/skills/$skill_name"
        echo "  ✓ linked $skill_name to .claude/skills"
    fi
    
    # Link to .opencode/skills
    if [ ! -L "$PROJECT_DIR/.opencode/skills/$skill_name" ]; then
        ln -sf "$skill" "$PROJECT_DIR/.opencode/skills/$skill_name"
        echo "  ✓ linked $skill_name to .opencode/skills"
    fi
done

# Sync for OpenCode
cd "$PROJECT_DIR"
skillkit sync -a opencode 2>/dev/null || echo "  (skillkit sync skipped - not installed)"

echo "Done! Run 'skillkit sync -a opencode' in your project to sync skills."