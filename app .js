// التفاعل والمنطق البرمجي المبدئي لمنصة NOVA
document.addEventListener('DOMContentLoaded', () => {
    const authBtn = document.getElementById('auth-btn');

    if (authBtn) {
        authBtn.addEventListener('click', () => {
            alert('أهلاً بك في منصة NOVA! نافذة تسجيل الدخول قيد التطوير.');
        });
    }
});
