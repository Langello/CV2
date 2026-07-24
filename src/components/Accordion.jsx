import React, { createContext, useContext, useMemo, useState } from "react";

const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);

export const Accordion = ({ children, defaultOpenKeys = [], className = "" }) => {
  const [openKeys, setOpenKeys] = useState(() => new Set(defaultOpenKeys));

  const toggle = (eventKey) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(eventKey)) {
        next.delete(eventKey);
      } else {
        next.add(eventKey);
      }
      return next;
    });
  };

  const value = useMemo(
    () => ({
      openKeys,
      toggle,
      isOpen: (key) => openKeys.has(key),
    }),
    [openKeys]
  );

  return (
    <AccordionContext.Provider value={value}>
      <div className={`accordion ${className}`.trim()}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ eventKey, children, className = "" }) => {
  const value = useMemo(() => ({ eventKey }), [eventKey]);
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={`accordion-item ${className}`.trim()}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

const AccordionHeader = ({ children, onClick }) => {
  const accordion = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  const open = accordion?.isOpen(item.eventKey);

  const handleClick = () => {
    accordion.toggle(item.eventKey);
    onClick?.();
  };

  return (
    <h2 className="accordion-header">
      <button
        type="button"
        className={`accordion-button${open ? "" : " collapsed"}`}
        aria-expanded={open}
        onClick={handleClick}
      >
        {children}
      </button>
    </h2>
  );
};

const AccordionBody = ({ children }) => {
  const accordion = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  const open = accordion?.isOpen(item.eventKey);

  return (
    <div
      className={`accordion-collapse${open ? " is-open" : ""}`}
      aria-hidden={!open}
    >
      <div className="accordion-collapse__inner">
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
