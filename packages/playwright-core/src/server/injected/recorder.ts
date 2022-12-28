  const addEvent = (event: Event) => {
    if (recording) {
      events.push(event);
    }
  };
  const handleEvent = (event: Event) => {
    addEvent(event);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event as any)._playwrightHandled = true;
  };
