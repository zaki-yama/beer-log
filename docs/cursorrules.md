# Cursor Rules

## Commit Messages

1. **Language**: Use English for commit messages
2. **Format**: Follow the Conventional Commits specification
   ```
   <type>[optional scope]: <description>

   [optional body]

   [optional footer(s)]
   ```

3. **Types**:
   - `feat`: A new feature
   - `fix`: A bug fix
   - `docs`: Documentation only changes
   - `style`: Changes that do not affect the meaning of the code
   - `refactor`: A code change that neither fixes a bug nor adds a feature
   - `perf`: A code change that improves performance
   - `test`: Adding missing tests or correcting existing tests
   - `chore`: Changes to the build process or auxiliary tools
   - `ci`: Changes to CI configuration files and scripts

4. **Description**:
   - Use the imperative, present tense: "change" not "changed" nor "changes"
   - Don't capitalize first letter
   - No dot (.) at the end

5. **Examples**:
   ```
   feat: add beer rating feature
   fix: correct image upload error
   docs: update API documentation
   style: format code using Biome
   chore: update dependencies
   ``` 
