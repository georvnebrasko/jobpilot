import React, { useState, useRef, useEffect } from 'react';
import faq from '../../data/faq.json';
import './ChatWidget.scss';

/** Подготовим массив [{regex, answer}] для быстрого поиска */
const rules = faq.flatMap(entry =>
  entry.patterns.map(pat => ({
    regex: new RegExp(pat, 'i'), // нечувствительно к регистру
    answer: entry.answer
  }))
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Привет! Задайте вопрос о вакансиях или аккаунте.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef();

  /* автопрокрутка */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const toggle = () => setOpen(o => !o);

  /** Поиск ответа по правилам */
  function findAnswer(q) {
    for (const { regex, answer } of rules) {
      if (regex.test(q)) return answer;
    }
    return 'Извините, я не нашёл информацию. Попробуйте сформулировать иначе или откройте раздел FAQ.';
  }

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { from: 'user', text }]);
    setInput('');

    const reply = findAnswer(text);
    /* имитируем задержку ответа */
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: reply }]);
    }, 300);
  };

  const handleKey = e => {
    if (e.key === 'Enter') send();
  };

  return (
    <>
      <div className={`chat ${open ? 'chat--open' : ''}`}>
        {/* ── header ── */}
        <div className="chat__header" onClick={toggle}>
          <span>Чат поддержки</span>
          <button className="chat__close">×</button>
        </div>

        {/* ── body ── */}
        {open && (
          <div className="chat__body">
            <div className="chat__msgs">
              {messages.map((m, i) => (
                <div key={i} className={`chat__msg chat__msg--${m.from}`}>
                  {m.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="chat__inputRow">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Введите сообщение…"
              />
              <button onClick={send}>➤</button>
            </div>
          </div>
        )}
      </div>

      {/* плавающая кнопка */}
      {!open && (
        <button className="chatBtn" onClick={toggle}>
          💬
        </button>
      )}
    </>
  );
}