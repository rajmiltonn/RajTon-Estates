@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        try {
            userService.register(user);
            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestParam String username, @RequestParam String password) {
        boolean success = userService.login(username, password) != null;
        return ResponseEntity.ok(success);
    }
}
