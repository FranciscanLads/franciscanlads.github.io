<!-- ===================== Contact Form (Professional UI) ===================== -->
<section class="contact-wrap" aria-labelledby="contactTitle">
  <div class="contact-card">
    <header class="contact-head">
      <h2 id="contactTitle">Contact Us</h2>
      <p class="contact-sub">We usually reply within 24–48 hours.</p>
    </header>

    <!-- Alerts (kept to match your old JS/endpoint) -->
    <div id="sendmessage" class="alert alert--success" role="alert" aria-live="polite" hidden>
      Your message has been sent. Thank you.
    </div>
    <div id="errormessage" class="alert alert--error" role="alert" aria-live="assertive" hidden></div>

    <form class="contactForm" method="post" action="contactform/contactform.php" novalidate>
      <div class="grid">
        <!-- Name -->
        <div class="field">
          <label for="name">Full Name <span aria-hidden="true" class="req">*</span></label>
          <input id="name" name="name" type="text" autocomplete="name" required
                 placeholder="Jane Doe" />
          <p class="field-help" id="name_help">Enter your full name.</p>
          <p class="validation" aria-live="polite"></p>
        </div>

        <!-- Email -->
        <div class="field">
          <label for="email">Email <span aria-hidden="true" class="req">*</span></label>
          <input id="email" name="email" type="email" autocomplete="email" required
                 inputmode="email" placeholder="jane@example.com" />
          <p class="field-help" id="email_help">We’ll only use this to contact you.</p>
          <p class="validation" aria-live="polite"></p>
        </div>

        <!-- Subject -->
        <div class="field field--full">
          <label for="subject">Subject <span aria-hidden="true" class="req">*</span></label>
          <input id="subject" name="subject" type="text" required placeholder="How can we help?" />
          <p class="validation" aria-live="polite"></p>
        </div>

        <!-- Message -->
        <div class="field field--full">
          <label for="message">Message <span aria-hidden="true" class="req">*</span></label>
          <textarea id="message" name="message" rows="6" required
                    placeholder="Write a short description of what you need..."></textarea>
          <p class="validation" aria-live="polite"></p>
        </div>
      </div>

      <div class="actions">
        <button type="submit" class="btn" id="submitBtn">
          <span class="btn__label">Send Message</span>
          <span class="btn__spinner" aria-hidden="true"></span>
        </button>
      </div>
    </form>
  </div>
</section>

<!-- ===================== Styles ===================== -->
<style>
  :root {
    --bg: #0b0f17;
    --panel: #111827;
    --muted: #9ca3af;
    --text: #e5e7eb;
    --border: #1f2937;
    --accent: #3b82f6;  /* blue-500 */
    --accent-strong: #2563eb; /* blue-600 */
    --success: #10b981; /* emerald-500 */
    --error: #ef4444;   /* red-500 */
    --radius: 14px;
    --shadow: 0 12px 30px rgba(0,0,0,.35);
  }
  @media (prefers-color-scheme: light) {
    :root {
      --bg: #f3f4f6;
      --panel: #ffffff;
      --muted: #6b7280;
      --text: #0f172a;
      --border: #e5e7eb;
      --accent: #1d4ed8;
      --accent-strong: #1e40af;
      --success: #059669;
      --error: #dc2626;
      --shadow: 0 8px 24px rgba(0,0,0,.07);
    }
  }

  .contact-wrap {
    background: var(--bg);
    padding: clamp(24px, 3vw, 48px);
    display: grid;
    place-items: center;
  }
  .contact-card {
    background: var(--panel);
    color: var(--text);
    width: min(920px, 100%);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: clamp(20px, 3vw, 36px);
  }
  .contact-head h2 {
    margin: 0 0 6px 0;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    line-height: 1.2;
  }
  .contact-sub {
    margin: 0 0 18px;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .alert {
    border-radius: 10px;
    padding: 12px 14px;
    margin: 0 0 14px;
    font-size: 0.95rem;
    border: 1px solid transparent;
  }
  .alert--success { background: rgba(16,185,129,.12); color: #d1fae5; border-color: rgba(16,185,129,.25); }
  .alert--error   { background: rgba(239,68,68,.12);  color: #fee2e2; border-color: rgba(239,68,68,.25); }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px 16px;
  }
  .field--full { grid-column: 1 / -1; }

  .field label {
    display: inline-block;
    margin: 0 0 6px;
    font-weight: 600;
  }
  .req { color: var(--accent); }
  .field input,
  .field textarea {
    width: 100%;
    color: var(--text);
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 12px;
    outline: none;
    transition: border-color .2s ease, box-shadow .2s ease;
  }
  .field input::placeholder,
  .field textarea::placeholder { color: var(--muted); }
  .field input:focus,
  .field textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 20%, transparent);
  }
  .field-help {
    margin: 6px 0 0;
    color: var(--muted);
    font-size: 0.85rem;
  }
  .validation {
    min-height: 1.1em;  /* reserve space */
    margin: 6px 0 0;
    color: var(--error);
    font-size: 0.9rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 16px;
  }
  .btn {
    position: relative;
    border: 1px solid var(--accent-strong);
    background: var(--accent);
    color: #fff;
    border-radius: 12px;
    padding: 12px 16px;
    font-weight: 600;
    cursor: pointer;
    transition: filter .2s ease, transform .08s ease;
  }
  .btn:hover { filter: brightness(0.98); }
  .btn:active { transform: translateY(1px); }
  .btn[disabled] { opacity: .65; cursor: not-allowed; }

  .btn__spinner {
    --s: 18px;
    position: absolute;
    inset-inline-end: 12px;
    top: 50%;
    width: var(--s);
    height: var(--s);
    margin-top: calc(-1 * var(--s) / 2);
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,.35);
    border-top-color: #fff;
    display: none;
    animation: spin .8s linear infinite;
  }
  .btn.is-loading .btn__spinner { display: inline-block; }
  .btn.is-loading .btn__label { opacity: .8; padding-right: 24px; }

  @keyframes spin { to { transform: rotate(360deg); } }

  @media (max-width: 760px) {
    .grid { grid-template-columns: 1fr; }
    .actions { justify-content: stretch; }
    .btn { width: 100%; text-align: center; }
  }
</style>

<!-- ===================== Script (uses jQuery if present) ===================== -->
<script>
(function () {
  // Utility: small email pattern (less brittle than the old one)
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setAlert(id, message, show) {
    var el = document.getElementById(id);
    if (!el) return;
    if (show) {
      el.hidden = false;
      if (message) el.textContent = message;
      el.classList.add('show');
    } else {
      el.hidden = true;
      el.classList.remove('show');
      if (message === '') el.textContent = '';
    }
  }

  function validateField(input) {
    var msg = '';
    if (input.hasAttribute('required') && !input.value.trim()) {
      msg = 'This field is required.';
    } else if (input.type === 'email' && input.value && !emailRe.test(input.value.trim())) {
      msg = 'Enter a valid email address.';
    } else if (input.id === 'subject' && input.value.trim().length < 3) {
      msg = 'Subject should be at least 3 characters.';
    } else if (input.id === 'message' && input.value.trim().length < 10) {
      msg = 'Please provide a bit more detail (10+ characters).';
    }
    var v = input.parentElement.querySelector('.validation');
    if (v) v.textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }

  function validateForm(form) {
    var inputs = form.querySelectorAll('input, textarea');
    var firstInvalid = null, ok = true;
    inputs.forEach(function (el) {
      var valid = validateField(el);
      if (!valid && !firstInvalid) firstInvalid = el;
      ok = ok && valid;
    });
    if (!ok && firstInvalid) firstInvalid.focus();
    return ok;
  }

  function serialize(form) {
    var pairs = [];
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.disabled) return;
      if (el.type === 'checkbox' || el.type === 'radio') {
        if (!el.checked) return;
      }
      pairs.push(encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value));
    });
    return pairs.join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();
    var form = e.currentTarget;
    var submitBtn = document.getElementById('submitBtn');

    setAlert('sendmessage', '', false);
    setAlert('errormessage', '', false);

    if (!validateForm(form)) return;

    // Loading state
    submitBtn.classList.add('is-loading');
    submitBtn.setAttribute('disabled', 'disabled');

    var action = form.getAttribute('action') || 'contactform/contactform.php';
    var payload = serialize(form);

    // Prefer jQuery if present (keeps parity with your stack)
    if (window.jQuery) {
      jQuery.ajax({
        type: 'POST',
        url: action,
        data: payload
      }).done(function (msg) {
        processResponse(msg, form, submitBtn);
      }).fail(function (xhr) {
        processResponse(xhr.responseText || 'Something went wrong. Please try again.', form, submitBtn, true);
      });
    } else {
      fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: payload
      }).then(function (res) { return res.text(); })
        .then(function (msg) { processResponse(msg, form, submitBtn); })
        .catch(function () { processResponse('Network error. Please try again.', form, submitBtn, true); });
    }
  }

  function processResponse(msg, form, btn, isError) {
    btn.classList.remove('is-loading');
    btn.removeAttribute('disabled');

    // Your backend convention was: "OK" => success, else error message
    if (!isError && (msg || '').trim() === 'OK') {
      setAlert('sendmessage', 'Your message has been sent. Thank you.', true);
      setAlert('errormessage', '', false);
      form.reset();
      // Clear inline errors after success
      form.querySelectorAll('.validation').forEach(function (n) { n.textContent = ''; });
      form.querySelector('#name')?.focus();
    } else {
      setAlert('sendmessage', '', false);
      setAlert('errormessage', (msg || 'Something went wrong. Please try again.'), true);
      document.getElementById('errormessage').focus?.();
    }
  }

  // Live validation on blur and input
  document.addEventListener('blur', function (e) {
    if (e.target.matches('.contactForm input, .contactForm textarea')) validateField(e.target);
  }, true);

  document.addEventListener('input', function (e) {
    if (e.target.matches('.contactForm input, .contactForm textarea')) validateField(e.target);
  });

  // Bind submit
  var formEl = document.querySelector('.contactForm');
  if (formEl) formEl.addEventListener('submit', handleSubmit);
})();
</script>
